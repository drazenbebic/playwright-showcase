import useStore from '../../store';
import * as Ariakit from '@ariakit/react';
import { Button, FormControl, TextInput, Heading } from '@primer/react'
import classNames from 'classnames';

import styles from './AddParticipantForm.module.scss';

const AddParticipantForm = () => {
  const form = Ariakit.useFormStore({ defaultValues: { name: '', email: '' } });
  const addObject = useStore((state: any) => state.addObject);
  const clearAllParticipants = useStore((state: any) => state.clearData);

  form.useSubmit(async (state) => {
    const values = state.values;
    const { email, name } = values;

    console.log(values);
    addObject({email, name});
  });

  return (
      <>
        <Heading >
          Add new participant
        </Heading>
        <Ariakit.Form
          store={form}
          aria-labelledby="add-new-participant"
          className="wrapper"
        >
          <div className={styles.formFieldsWrapper}>
            <div className="field">
              <FormControl.Label>Name</FormControl.Label>
              <Ariakit.FormInput
                render={<TextInput required />}
                name={form.names.name}
                placeholder="John Doe"
                className={styles.formField}
                required
              />
              <Ariakit.FormError name={form.names.name} className="error" />
            </div>
            <div className="field">
              <FormControl.Label>E-Mail</FormControl.Label>
              <Ariakit.FormInput
                render={<TextInput required />}
                type="text"
                name={form.names.email}
                placeholder="johndoe@example.com"
                className={styles.formField}
                required
              />
              <Ariakit.FormError name={form.names.email} className="error" />
            </div>
          </div>
          <div className={styles.actionsWrapper}>
            <Button onClick={() => form.submit()} className={classNames(styles.button, styles.addParticipantButton)}>
              Add
            </Button>
            <Button onClick={() => clearAllParticipants()} className={classNames(styles.button, styles.dangerButton)}>
              Reset all participants
            </Button>
          </div>
        </Ariakit.Form>
      </>
  );
}

export default AddParticipantForm;
