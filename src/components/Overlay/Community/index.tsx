import { useApolloClient } from '@apollo/client';
import { useUserDetails } from '@sdk/api/queries';
import React, { useState } from 'react';
import { OverlayContextInterface } from '../context';
import Overlay from '../Overlay';
import { CreateCommunityMutation, CreateCommunityMutationVariables } from './gqlTypes/CreateCommunityMutation';
import { createCommunityMutation } from './queries';
import './scss/index.scss';


type CommunityInput = {
  title: string;
  description: string;
  tags: Array<string>;
};

export const Community: React.FC<{ overlay: OverlayContextInterface }> = (
  { overlay }
) => {
  const [communityInput, setCommunityInput] = useState<CommunityInput>({ title: '', description: '', tags:[''] });
  const apolloClient = useApolloClient();
  const { data: user } = useUserDetails();

  const handleInput = (event: any) => {
    const { name, value } = event.target;
    setCommunityInput( (prevState: CommunityInput)  => {
    const data = { ...prevState, [name]: value };
    return data;
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    /* submit should use the data, and use the community mutation to send to backend 
    for creating this community
    */
   const createCommunityArgument: CreateCommunityMutationVariables = {
     createCommunity: {
       ownerId: user.userDetails.id,
       description: communityInput.description,
       title: communityInput.title,
       tags: communityInput.tags
     }
   };

   /*
   I need to add one update function here.
   */
   const queryResult =  await apolloClient.mutate<CreateCommunityMutation, CreateCommunityMutationVariables>({ mutation:createCommunityMutation, variables: createCommunityArgument });
   if( queryResult.errors) {
     console.log(`user ${ user.userDetails.id  } create community ${  communityInput.title  } failed`);
   } else {
    console.log(`user ${ user.userDetails.id } created community ${ queryResult.data.createCommunity.title}`);
   }
  };
  
  return (
    <Overlay testingContext="communityOverlay" context={overlay}>
      <form className="community-form" onSubmit={handleSubmit}>
        <label
          htmlFor="community-form__input--name" 
          className="community-form__label--name"
        >社区名
        </label>
        <input
          id="community-form__input--name" 
          type="text"
          name="title"
          placeholder="" 
          value={communityInput.title}
          onChange={handleInput}
        />

        <label
          htmlFor="community-form__input--description" 
          className="community-form__label--description"
        >描述
        </label>
        <textarea
          className="community-form__input--description" 
          name="description"
          maxLength={200}
          rows={10} 
          value={communityInput.description}
          onChange={handleInput}
        />

        <label
          htmlFor="community-form__input--tags" 
          className="community-form__label--tags"
        >标签
        </label>
        <input
          className="community-form__input--tags"
          type="text"
          name="tags"
          placeholder=""
          value={communityInput.tags}
          onChange={handleInput}
        />
        <input type="submit" className="community-form__submit value" value="确定" />

      </form>
    </Overlay>
  );
};