<template>

     <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
      <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="lampy.name"
      :counter="20"
      label="Name"
      required
    ></v-text-field>

        <v-text-field
      v-model="lampy.desc"
      :counter="50"
      label="Description"
      required
    ></v-text-field>

         <v-text-field
      v-model="lampy.category"
      :counter="15"
      label="Category"
      required
    ></v-text-field>

    <v-text-field
      v-model="lampy.person"
      
      label="Contact Person"
      required
    ></v-text-field>
  <validation-provider
        v-slot="{ errors }"
        name="phoneNumber"
        :rules="{
          required: true,
          digits: 9

        }"
      >
        <v-text-field
          v-model="phoneNumber"
          :counter="9"
          :error-messages="errors"
          label="Phone Number"
          required
        ></v-text-field>
      </validation-provider>

    <v-btn
      
        class="mr-4"
        type="submit"
        :disabled="invalid"
      >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

  </v-form>
     </validation-observer>
</template>