import useStore, { Participant, StoreState } from '../../store';
import * as Ariakit from '@ariakit/react';
import { Button, FormControl, TextInput, Heading } from '@primer/react'
import classNames from 'classnames';
import styles from './AddParticipantForm.module.scss';

const AddParticipantForm = () => {
  const form = Ariakit.useFormStore({ defaultValues: { name: '', email: '' } });
  const addObject = useStore((state: StoreState) => state.addObject);
  const participantsList = useStore((state: StoreState) => state.data);
  const clearAllParticipants = useStore((state: StoreState) => state.clearData);

  form.useValidate(async ({ values: { name, email } }) => {
    if (!name) {
      form.setError(form.names.name, 'Please type in a name.');
    }
    if (!email) {
      form.setError(form.names.email, 'Please type in an email.');
    }
  })

  form.useSubmit(async (state) => {
    const values = state.values;
    const { email, name } = values;
    const participant: Participant = {id: `${participantsList.length + 1}`, email, name}

    addObject(participant);
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
            <div className={styles.field}>
              <Ariakit.FormLabel
                name={form.names.name}
                render={<FormControl.Label>Name</FormControl.Label>}
              />
              <Ariakit.FormInput
                render={<TextInput required />}
                name={form.names.name}
                placeholder="John Doe"
                className={styles.formField}
                required
              />
              <Ariakit.FormError name={form.names.name} className={styles.error} />
            </div>
            <div className={styles.field}>
              <Ariakit.FormLabel
                name={form.names.email}
                render={<FormControl.Label>E-Mail</FormControl.Label>}
              />
              <Ariakit.FormInput
                render={<TextInput required />}
                type="email"
                name={form.names.email}
                placeholder="johndoe@example.com"
                className={styles.formField}
                required
              />
              <Ariakit.FormError name={form.names.email} className={styles.error} />
            </div>
          </div>
          <div className={styles.actionsWrapper}>
            <Ariakit.FormSubmit
              store={form}
              render={
                <Button variant="primary" className={classNames(styles.button, styles.block)}>
                  Add
                </Button>
              }
            />
            <Button onClick={() => clearAllParticipants()} className={classNames(styles.button, styles.dangerButton)}>
              Reset all participants
            </Button>
          </div>
        </Ariakit.Form>
      </>
  );
}

export default AddParticipantForm;
