<script>
  import {
    Row,
    Column,
    Form,
    TextInput,
    PasswordInput,
    Button,
    FormGroup,
  } from 'carbon-components-svelte';
  import TiltRow from '../components/TiltRow.svelte';

  import { createForm } from 'svelte-forms-lib';
  import * as yup from 'yup';
  import { replace } from 'svelte-spa-router';
  import { userStore } from '../stores/user';

  let submitting = false;

  const { form, errors, handleSubmit } = createForm({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      username: yup.string().required(),
      password: yup.string().required(),
    }),
    onSubmit: async (values) => {
      submitting = true;

      let response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      let { type } = await response.json();

      userStore.update(() => ({
        username: values.username,
        password: values.password,
        type,
      }));

      if (type === 'USER') {
        replace('/overview');
      } else {
        replace('/controlPanel');
      }
    },
  });
</script>

<Row>
  <Column lg={16}>
    <h1 style="margin-bottom: 1.5rem">IPL Bidding!</h1>
  </Column>
</Row>

<Row>
  <Column lg={8}>
    <!-- <PlayerCardNew /> -->
    <div style="margin-left:30px;width: 100px;">
      <TiltRow direction="left">
        <h6>Batsman : 7/20</h6>
      </TiltRow>
    </div>
  </Column>
  <Column lg={8}>
    {#if !$userStore.username}
      <Form on:submit={handleSubmit}>
        <FormGroup>
          <TextInput
            labelText="User name"
            placeholder="Enter user name..."
            disabled={submitting}
            bind:value={$form.username}
            invalid={$errors.username}
            invalidText="Username is required"
          />
          <PasswordInput
            type="password"
            labelText="Password"
            placeholder="Enter password..."
            disabled={submitting}
            bind:value={$form.password}
            invalid={$errors.password}
            invalidText="Password is required"
          />
        </FormGroup>
        <Button type="submit" skeleton={submitting}>Submit</Button>
      </Form>
    {:else}
      <h2>Hey {$userStore.username}!</h2>
    {/if}
  </Column>
</Row>
