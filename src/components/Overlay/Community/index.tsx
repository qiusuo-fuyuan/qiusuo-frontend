import { useApolloClient } from '@apollo/client';
import React, { useState } from 'react';
import { OverlayContextInterface } from '../context';
import Overlay from '../Overlay';
import { CreateCommunityMutation } from './gqlTypes/CreateCommunityMutation';
import './scss/index.scss';


type CommunityInput = {
  name: string;
  description: string;
  tags: Array<string>;
};

export const Community: React.FC<{ overlay: OverlayContextInterface }> = (
  { overlay }
) => {
  const [communityInput, setCommunityInput] = useState<CommunityInput>({ name: '', description: '', tags:[''] });
  const apolloClient = useApolloClient();

  const handleInput = (event: any) => {
    const { name, value } = event.target;
    setCommunityInput( (prevState: CommunityInput)  => {
    const data = { ...prevState, [name]: value };
    return data;
    });
  };

  const handleSubmit = (event: any) => {
    /* submit should use the data, and use the community mutation to send to backend 
    for creating this community
    */
   const queryResult =  apolloClient.mutate<CreateCommunityMutation, CreateCommunityMutationVariables>({ mutation:tokenAuthMutation, variables });
  };
  
  return (
    <Overlay testingContext="communityOverlay" context={overlay}>
      <form className="community-form">
        <label
          htmlFor="community-form__input--name" 
          className="community-form__label--name"
        >社区名
        </label>
        <input
          id="community-form__input--name" 
          type="text"
          name="name"
          placeholder="" 
          value={communityInput.name}
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