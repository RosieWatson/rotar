import * as React from "react";
import styled from "styled-components"
import { useForm } from "react-hook-form";
import { Checkbox, Button, TextField, Select } from "react95";
import { addPerson } from "../dataUtils";

const timezones = [
  { value: "us", label: "US"},
  { value: "uk", label: "UK"}
]

export const AddPeopleContainer = () => {
  const { register, handleSubmit } = useForm();
  const [addSuccess, setAddSuccess] = React.useState(false)

  const handleAddAnother = () => {
    setAddSuccess(false);
  }

  const onSubmit = (data) => {
    addPerson(data);
    setAddSuccess(true);
  };

  return (
    <main>
      { !addSuccess ?
        (
          <>
            <h1>Add a person</h1>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name">Name</label>
              <TextField id="name" {...register("name")} />

              <label htmlFor="email">Email</label>
              <TextField id="email" {...register("email")}/>

              <label htmlFor="timezone">Timezone</label>
              <Select
                id="timezone"
                options={timezones}
                defaultValue="uk"
                {...register("timezone")}/>

              <Checkbox
                id="office"
                label="Will they be in the office?"
                {...register("office")}
              />

              <Button type="submit">Add to Rota</Button>
            </FormContainer>
          </>
        ) : (
          <>
            <h1>Success!</h1>
            <Button type="button" onClick={handleAddAnother}>Add another person</Button>
          </>
        )
      }

    </main>);
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`