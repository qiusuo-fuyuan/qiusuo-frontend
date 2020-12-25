import { useApolloClient } from '@apollo/client';
import { MyCommunities, MyCommunities_activeChannel, MyCommunities_activeCommunity } from '@sdk/api/Community/gqlTypes/MyCommunities';
import { OverlayContext, OverlayTheme, OverlayType } from 'AppComponents/Overlay';
import classNames from 'classnames';
import React, { useCallback } from 'react';
import { SetActiveChannelMutation, SetActiveChannelMutationVariables } from './gqlTypes/SetActiveChannelMutation';
import { setActiveChannelMutation } from './queries';
import './scss/index.scss';

type ChannelNavigatorProps = {
  activeCommunity: MyCommunities_activeCommunity;
  activeChannel: MyCommunities_activeChannel;
};

/**
 * TODO: classname should be a composed classname
 */
export const ChannelNavigator: React.FC<ChannelNavigatorProps> = (props: ChannelNavigatorProps) => {
  const { activeCommunity, activeChannel } = props;
  const apolloClient = useApolloClient();
  
  const isChannelActive = useCallback((newActive: MyCommunities_activeChannel, currentActive: MyCommunities_activeChannel) => {
    if(currentActive == null) {
      return false;
    }
    return newActive.id  ===  currentActive.id;
  }, []);




  /* TODO: Maybe I have programming error here. Inside the event listener, i am trying to
    access local variable. Does closure work here? (What is closure) 
  */
  const updateActiveChannel = async (event: any) => {
    const newActiveChannelId = event.target.dataset.channelid;
    if(newActiveChannelId === activeChannel.id) {
      return;
    }    
    const setActiveChannelArgument: SetActiveChannelMutationVariables = {
      channelId: newActiveChannelId
    };

    const queryResult =  await apolloClient.mutate<SetActiveChannelMutation, SetActiveChannelMutationVariables>({ mutation:setActiveChannelMutation, 
      variables: setActiveChannelArgument,
      updateQueries: {
        // updateQueries need to take the operation name 
        MyCommunities: (previousResult: MyCommunities, { mutationResult }) => {
          const newActiveChannel = mutationResult.data.setActiveChannel;
          const allCommunities = {
            activeChannel: newActiveChannel
          };
          return allCommunities;
        }
      } 
    });
  };

  return (
    <OverlayContext.Consumer>
      { overlayContext => (
        <div className="channels-menu">
          <button
            className="community-page__create-channel__btn"
            onClick={() =>
                  overlayContext.show(
                    OverlayType.create_channel,
                    OverlayTheme.modal,
                    { data: { community: activeCommunity } }
                  )}
          >添加频道
          </button>
          <div>
            {
             activeCommunity!=null && activeCommunity.channels.map((entry, index) => {
              return (
                <div
                  className={classNames({ 'active': isChannelActive(entry, activeChannel) })}
                  role="button"
                  key={entry.id}
                  tabIndex={index}
                  onClick={updateActiveChannel}
                > 
                  {entry.name}
                </div>);
            })
          }
          </div>
        </div>
      )}
    </OverlayContext.Consumer> );
};