/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Button from '../../Button/Button';
import Grid from '../../Grid/Grid';
import Textarea from '../../Input/Textarea';
import InputField from '../../Input/InputField';
import Loader from '../../Loader/Loader';
import Separator from '../../Separator/Separator';
import './unitForm.scss';
import Image from '../../Image/Image';
import { IImage, IUnit } from '../../../Context/PostContext';
import GridColumn from '../../Grid/GridColumn';

interface IUnitFormProps {
  currentFormFields?: IUnit,
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
  images: any[];
  coverImageIndex: any;
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

const UnitForm = (props: IUnitFormProps): JSX.Element => {
  const { onSave, currentFormFields, isLoading } = props;
  const [imagePreviewUris, setImagePreviewUris] = useState<string[]>([]);
  const [formState, setFormState] = useState<IUnitFormFields>(
    (currentFormFields && {
      ...currentFormFields,
      coverImageIndex: currentFormFields.images.findIndex((i: IImage) => i.isCoverImage),
    })
    || {
      name: '',
      condition: '',
      location: '',
      size: '',
      shape: '',
      material: '',
      story: '',
      images: [],
      coverImageIndex: 0,
    },
  );

  const readImageUri = (fileList: FileList | null): void => {
    if (fileList && fileList.length) {
      Array.from(fileList).forEach((f) => {
        const reader = new FileReader();
        reader.onload = (ev) => {
          setImagePreviewUris((prevState) => [...prevState, ev.target?.result as string]);
        };
        reader.readAsDataURL(f);
      });
    } else {
      setImagePreviewUris([]);
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
    setImagePreviewUris([]);
    readImageUri(e.target.files);
    setFormState((prevState) => ({
      ...prevState,
      [field]: e.target.files,
    }));
  };

  const setPreviewIndex = (index: number): void => {
    setFormState((prevState) => ({
      ...prevState,
      coverImageIndex: index,
    }));
  };

  const renderImagePreview = (): JSX.Element[] | null => {
    if (imagePreviewUris.length) {
      return imagePreviewUris
        .map((i, index) => (
          <Image onClick={() => setPreviewIndex(index)} isHighlighted={formState.coverImageIndex === index} key={i} src={i} alt={formState.name} size="small" />
        ));
    }
    if (currentFormFields?.images) {
      return currentFormFields.images
        .map((i, index) => (
          <Image onClick={() => setPreviewIndex(index)} isHighlighted={formState.coverImageIndex === index} key={i._id} src={i.imageUrl} alt={formState.name} size="small" />
        ));
    }
    return null;
  };

  return (
    <form onSubmit={(e) => addUnitHandler(e)} className="unit-form">
      <Grid gap="medium" className="unit-form__input">
        <GridColumn width={['lg-4']}>
          <Grid direction="column" gap="medium">
            <GridColumn>
              <InputField
                type="text"
                name="name"
                placeholder={formFields.name}
                defaultValue={formState?.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'name')}
                required
              />
            </GridColumn>
            <GridColumn>

              <InputField
                type="text"
                name="condition"
                placeholder={formFields.condition}
                defaultValue={formState?.condition}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'condition')}
              />

            </GridColumn>
            <GridColumn>
              <InputField
                type="text"
                name="location"
                placeholder={formFields.location}
                defaultValue={formState?.location}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'location')}
              />
            </GridColumn>
            <GridColumn>
              <Textarea
                rows={7}
                cols={25}
                name="story"
                placeholder={formFields.story}
                defaultValue={formState?.story}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange(e, 'story')}
              />
            </GridColumn>

          </Grid>

        </GridColumn>
        <GridColumn width={['lg-4']}>
          <Grid direction="column" gap="medium">
            <GridColumn>
              <InputField
                type="text"
                name="size"
                placeholder={formFields.size}
                defaultValue={formState?.size}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'size')}
              />
            </GridColumn>
            <GridColumn>
              <InputField
                type="text"
                name="shape"
                placeholder={formFields.shape}
                defaultValue={formState?.shape}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'shape')}
              />
            </GridColumn>
            <GridColumn>
              <InputField
                type="text"
                name="material"
                placeholder={formFields.material}
                defaultValue={formState?.material}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'material')}
              />
            </GridColumn>

          </Grid>
        </GridColumn>
        <GridColumn width={['lg-4']}>
          <Grid direction="column">
            <InputField
              multiple
              type="file"
              name={formFields.image}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileInputChange(e, 'images')}
            />
            {renderImagePreview()}
          </Grid>
        </GridColumn>

      </Grid>
      <Separator type="div" color="transparent" />
      {isLoading ? <Loader /> : <Button className="unit-form__button" purpose="primary" type="submit">{currentFormFields ? 'Muuda' : 'Lisa'}</Button>}
    </form>
  );
};

export default UnitForm;
