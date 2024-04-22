import useStore from '../../store';
import * as Ariakit from '@ariakit/react';
import { Button, TextInput, Label } from '@primer/react'

import styles from './AddParticipantForm.module.scss';

const AddParticipantForm = () => {
  const form = Ariakit.useFormStore({ defaultValues: { name: '', email: '' } });
  const addObject = useStore((state: any) => state.addObject);

  form.useSubmit(async (state) => {
    const values = state.values;
    const { email, name } = values;

    addObject({email, name});
  });

  return (
    <Ariakit.Form
      store={form}
      aria-labelledby="add-new-participant"
      className="wrapper"
    >
      <h2 id="add-new-participant" className="heading">
        Add new participant
      </h2>
      <div className="field">
        <Label>Name</Label>
        <TextInput
          as={Ariakit.FormInput}
          name={form.names.name}
          placeholder="John Doe"
          className="input"
          required
        />
        <Ariakit.FormError name={form.names.name} className="error" />
      </div>
      <div className="field">
        <Label>Email</Label>
        <TextInput
          as={Ariakit.FormInput}
          type="text"
          name={form.names.email}
          placeholder="johndoe@example.com"
          className="input"
          required
        />
        <Ariakit.FormError name={form.names.email} className="error" />
      </div>
      <div className={styles.actionsWrapper}>
        <Button onClick={() => form.reset()} className={styles.button}>
          Reset
        </Button>
        <Button onClick={() => form.submit()} className={styles.button}>
          Add
        </Button>
      </div>
    </Ariakit.Form>
  );
}

export default AddParticipantForm;
