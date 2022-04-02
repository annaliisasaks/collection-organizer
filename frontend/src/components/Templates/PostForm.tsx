import React from 'react';
import './postForm.scss';
import Button from '../Button/Button';
import Textfield from '../Input/Textfield';
import Textarea from '../Input/Textarea';

interface IPostForm {
  currentFormFields?: IFormFields
  onSave?: (post: IFormFields) => void,
}

export interface IFormFields {
  content: string,
  header: string,
}

const formFields = {
  header: 'header',
  content: 'content',
};

const PostForm = (props:IPostForm):JSX.Element => {
  const { onSave, currentFormFields } = props;

  const addPostHandler = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    const inputValue = {
      header: (e.currentTarget.elements.namedItem(formFields.header) as HTMLInputElement).value,
      content: (e.currentTarget.elements.namedItem(formFields.content) as HTMLInputElement).value,
    };
    if (onSave) {
      onSave(inputValue);
    }
  };

  return (
    <form className="post-form" onSubmit={(e) => addPostHandler(e)}>

      <Textfield className="post-form__input" type="text" name={formFields.header} placeholder={formFields.header} defaultValue={currentFormFields?.header} required />
      <Textarea
        className="post-form__textarea"
        rows={7}
        cols={5}
        name={formFields.content}
        placeholder={formFields.content}
        defaultValue={currentFormFields?.content}
        required
      />

      <Button className="post-form__button" purpose="primary" type="submit">{currentFormFields ? 'Edit' : 'Post'}</Button>
    </form>
  );
};

export default PostForm;
