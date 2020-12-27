import { useApolloClient } from '@apollo/client';
import { MyCommunities, MyCommunities_activeCommunity } from '@sdk/api/Community/gqlTypes/MyCommunities';
import { getMyCommunities } from '@sdk/api/Community/queries';
import { OverlayContext, OverlayTheme, OverlayType } from 'AppComponents/Overlay';
import classNames from 'classnames';
import React, { useCallback, useEffect, useRef } from 'react';
import { SetActiveCommunityMutation, SetActiveCommunityMutationVariables } from './gqlTypes/SetActiveCommunityMutation';
import { setActiveCommunityMutation } from './queries';
import './scss/index.scss';



/*
I need to call the backend to get a list of 
communities
*/

type CommunityNavigatorProps = {
  myCommunities: MyCommunities
  activeCommunity: MyCommunities_activeCommunity
};

export const CommunityNavigator: React.FC<CommunityNavigatorProps> = (props: CommunityNavigatorProps) => {
  const { myCommunities, activeCommunity } = props;
  const apolloClient = useApolloClient();
  const currentActiveDiv = useRef(null);

  const isCommunityActive = useCallback((newActive: MyCommunities_activeCommunity, currentActive: MyCommunities_activeCommunity) => {
    if(currentActive == null) {
      return false;
    }
    return newActive.id  ===  currentActive.id;
  }, []);


  const updateActiveCommunity = async (event: any) => {
    const newActiveCommunityId = event.target.dataset.communityid;
    if(newActiveCommunityId === activeCommunity.id) {
      return;
    }
    const setActiveCommunityArgument: SetActiveCommunityMutationVariables = {
      communityId: newActiveCommunityId
    };


    /* I have to use refetchQuery to refech the MyCommunities query. The reason is that
       After I update the activeCommunity, i didn't know the active channel for this community
    */
    const queryResult =  await apolloClient.mutate<SetActiveCommunityMutation, SetActiveCommunityMutationVariables>({ mutation:setActiveCommunityMutation, 
      variables: setActiveCommunityArgument,
      refetchQueries: [{ query: getMyCommunities }]
    });
    if( queryResult.errors) {
      // TODO: Handle error
      console.log('set active community failed');
    } else {
      // TODO: handle correct result
     console.log(`set community ${queryResult.data.setActiveCommunity.title}`);
    }
  };

  useEffect(() => {
    if (currentActiveDiv.current) {
      currentActiveDiv.current.focus();
    }
  }, []);
  

  return (
    <OverlayContext.Consumer>
      { overlayContext => (
        <div className="communities-menu">
          <div
            role="button"
            tabIndex={0}
            className="communities-menu__create-btn"
            onClick={() =>
                    overlayContext.show(
                      OverlayType.create_community,
                      OverlayTheme.modal
                    )}
          >添加社区
          </div>
          {
            // here, it's better to use make class name
            myCommunities!=null && myCommunities.myCommunities!= null && myCommunities.myCommunities.map((entry, index) => {
              return <div key={entry.id} role="button" tabIndex={index} className={classNames({ 'active': isCommunityActive(entry, activeCommunity) })} data-communityid={entry.id} onClick={updateActiveCommunity}>{entry.title}</div>;
            })
          }
        </div>)}
    </OverlayContext.Consumer>
  );
};