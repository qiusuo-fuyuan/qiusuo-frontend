import React from 'react';
import { OverlayContextInterface } from '../context';
import Overlay from '../Overlay';
import './scss/index.scss';

export const Community: React.FC<{ overlay: OverlayContextInterface }> = (
  { overlay }
) => {
  return (
    <Overlay testingContext="communityOverlay" context={overlay}>
      <form className="form--community">
        <label htmlFor="form__input--name" className="form__label--name">社区名</label>
        <input id="form__input--name" type="text" name="name" placeholder="" />


        <label htmlFor="form__input--description" className="form__label--description">描述</label>
        <textarea className="form__input--description" maxLength={200} rows={10} />


        <label htmlFor="form__input--tags" className="form__label--tags">标签</label>
        <input className="form__input--tags" type="text" name="tags" placeholder="" />

        <button type="button">确定</button>
      </form>
    </Overlay>
  );
};