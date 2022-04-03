import React, { useState } from 'react';
import Button from '../../Button/Button';
import Grid from '../../Grid/Grid';
import Textarea from '../../Input/Textarea';
import InputField from '../../Input/InputField';
import Loader from '../../Loader/Loader';
import Separator from '../../Separator/Separator';
import './unitForm.scss';
import Image from '../../Image/Image';

interface IUnitFormProps {
  currentFormFields?: IUnitFormFields,
  onSave?: (unit: IUnitFormFields) => void,
  isLoading?: boolean
}

export interface IUnitFormFields {
  name: string;
  condition: string;
  location: string;
  size: string;
  shape: string;
  material: string;
  story: string;
  image: any;
}

const formFields = {
  name: 'Kirjeldus',
  condition: 'Seisukord',
  location: 'Asukoht',
  size: 'Suurus',
  shape: 'Kuju',
  material: 'Materjal',
  story: 'Lugu',
  image: 'Pilt',
};

const UnitForm = (props: IUnitFormProps):JSX.Element => {
  const { onSave, currentFormFields, isLoading } = props;

  const [imagePreviewUri, setImagePreviewUri] = useState<string | undefined>(undefined);
  const [formState, setFormState] = useState<IUnitFormFields>(
    currentFormFields || {
      name: '',
      condition: '',
      location: '',
      size: '',
      shape: '',
      material: '',
      story: '',
      image: null,
    },
  );

  const readImageUri = (fileList: FileList | null): void => {
    if (fileList && fileList.item(0)) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setImagePreviewUri(ev.target?.result as string);
      };
      reader.readAsDataURL(fileList.item(0)!);
    }
  };

  const addUnitHandler = (e: React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    onSave?.(formState);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof IUnitFormFields): void => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof IUnitFormFields): void => {
    readImageUri(e.target.files);
    setFormState((prevState) => ({
      ...prevState,
      [field]: e.target.files?.item(0),
    }));
  };

  return (
    <form onSubmit={(e) => addUnitHandler(e)} className="unit-form">
      <Grid gap="medium">
        <Grid direction="column" gap="medium">
          <InputField
            type="text"
            name="name"
            placeholder={formFields.name}
            defaultValue={formState?.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'name')}
            required
          />
          <InputField
            type="text"
            name="condition"
            placeholder={formFields.condition}
            defaultValue={formState?.condition}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'condition')}
          />
          <InputField
            type="text"
            name="location"
            placeholder={formFields.location}
            defaultValue={formState?.location}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'location')}
          />
          <Textarea
            rows={7}
            cols={5}
            name="story"
            placeholder={formFields.story}
            defaultValue={formState?.story}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange(e, 'story')}
          />
        </Grid>
        <Grid direction="column" gap="medium">
          <InputField
            type="text"
            name="size"
            placeholder={formFields.size}
            defaultValue={formState?.size}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'size')}
          />
          <InputField
            type="text"
            name="shape"
            placeholder={formFields.shape}
            defaultValue={formState?.shape}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'shape')}
          />
          <InputField
            type="text"
            name="material"
            placeholder={formFields.material}
            defaultValue={formState?.material}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'material')}
          />
        </Grid>
        <Grid direction="column">
          <InputField
            type="file"
            name={formFields.image}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileInputChange(e, 'image')}
          />
          {imagePreviewUri && (
            <Image src={imagePreviewUri} alt={formState.name} size="small" />
          )}
        </Grid>
      </Grid>
      <Separator type="div" color="transparent" />
      {isLoading ? <Loader /> : <Button className="unit-form__button" purpose="primary" type="submit">{currentFormFields ? 'Muuda' : 'Lisa'}</Button>}
    </form>
  );
};

export default UnitForm;
