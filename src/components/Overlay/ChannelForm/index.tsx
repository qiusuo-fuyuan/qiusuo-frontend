import { useApolloClient } from '@apollo/client';
import { useUserDetails } from '@sdk/api/queries';
import React, { useState } from 'react';
import { ChannelType } from '../../../../gqlTypes/globalTypes';
import { OverlayContextInterface } from '../context';
import Overlay from '../Overlay';
import { CreateChannelMutation, CreateChannelMutationVariables } from './gqlTypes/CreateChannelMutation';
import { createChannelMutation } from './queries';


type ChannelInput = {
  name: string;
};

export const ChannelForm: React.FC<{ overlay: OverlayContextInterface }> = (
  { overlay }
) => {
  
  const [channelInput, setChannelInput] = useState<ChannelInput>({ name: '' });
  const apolloClient = useApolloClient();
  const { data: user } = useUserDetails();

  const handleInput = (event: any) => {
    const { name, value } = event.target;
    setChannelInput( (prevState: ChannelInput)  => {
    const data = { ...prevState, [name]: value };
    return data;
    });
  };

  const handleSubmit = async (event: any) => {
    /* the default action for submit is sending one request using browser. Prevent default is preventing
      the default action
    */
    event.preventDefault(); 
    // event.stopPropagation(); Stop propagating to the event to parent
   /* submit should use the data, and use the community mutation to send to backend 
   for creating this community
   */
  const createChannelArgument: CreateChannelMutationVariables = {
    createChannelInput: {
      name: channelInput.name,

      // here, the channelType should not import from globalTypes
      channelType: ChannelType.CHAT,
      communityId: overlay.context.data.community.communityId
      }
    };

   /*
   I need to add one update function here.
   */
  const queryResult =  await apolloClient.mutate<CreateChannelMutation, CreateChannelMutationVariables>({ mutation:createChannelMutation, 
    variables: createChannelArgument
  });
 if( queryResult.errors) {
   // TODO: Handle error
   console.log(`user ${ user.userDetails.userId  } create channel ${  channelInput.name  } failed`);
 } else {
   // TODO: handle correct result
  console.log(`user ${ user.userDetails.userId } created channel ${ queryResult.data.createChannel.name}`);
 }
 overlay.hide();
  };

  return (
    <Overlay testingContext="channelOverlay" context={overlay}>
      <form className="channel-form">
        <label
          htmlFor="channel-form__input--name" 
          className="channel-form__label--name"
        >名字
        </label>
        <input
          id="community-form__input--name" 
          type="text"
          name="name"
          placeholder="" 
          value={channelInput.name}
          onChange={handleInput}
        />
        <button type="submit" className="channel-form__submit value" value="确定" onClick={handleSubmit}>
          确定
        </button>
      </form>
    </Overlay>
    );
};