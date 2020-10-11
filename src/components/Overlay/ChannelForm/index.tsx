import React, { useState } from 'react';
import { OverlayContextInterface } from '../context';
import Overlay from '../Overlay';


enum ChannelType {
  QA = '问答',
  Chat = '聊天',
  LiveStreaming = '直播',
}

type ChannelInput = {
  name: string;
  channelType: ChannelType;
};


export const ChannelForm: React.FC<{ overlay: OverlayContextInterface }> = (
  { overlay }
) => {
  const [channelInput, setChannelInput] = useState<ChannelInput>({ name: '', channelType: ChannelType.Chat });
  
  /**
   * The code here is actually duplicated with the code in community form. That's 
   * why handling of a Form should be moved into a common area
   */
  const handleInput = (event: any) => {
    const { name, value } = event.target;
    setChannelInput( (prevState: ChannelInput)  => {
    const data = { ...prevState, [name]: value };
    return data;
    });
  };
  
  return (
    <Overlay testingContext="channelOverlay" context={overlay}>
      <form className="channel-form">
        <label
          htmlFor="channel-form__input--name" 
          className="channel-form__label--name"
        >频道名
        </label>
        <input
          id="channel-form__input--name" 
          type="text"
          name="name"
          placeholder="" 
          value={channelInput.name}
          onChange={handleInput}
        />
        <select name="channelType">
          <option value="0">{ChannelType.QA}</option>
          <option value="0">{ChannelType.Chat}</option>
          <option value="0">{ChannelType.LiveStreaming}</option>
        </select>
      </form>
    </Overlay>
  );
};