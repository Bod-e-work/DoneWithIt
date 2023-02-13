import * as Yup from "yup";
import React from 'react';
import { StyleSheet } from 'react-native';


import CategoryPickerItem from "../components/CategoryPickerItem";
import {AppForm, AppFormField, AppFormPicker, SubmitButton, } from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import useLocation from "../components/hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: '#6a4c93', icon: 'apps' },
  { label: "Clothing", value: 2, backgroundColor: '#8ac926', icon: 'email'  },
  { label: "Camera", value: 3, backgroundColor: '#48cae4', icon: 'lock' },
  { label: "Cushion", value: 4, backgroundColor: '#e76f51', icon: 'square' },
  { label: "Balls", value: 5, backgroundColor: '#219ebc', icon: 'circle'  },
  { label: "Bags", value: 6, backgroundColor: '#fb5607', icon: 'triangle' },
  { label: "Toys", value: 7, backgroundColor: '#ffba08', icon: 'car' },
  { label: "Phones", value: 8, backgroundColor: '#dc2f02', icon: 'phone'  },
  { label: "Books", value: 9, backgroundColor: '#ff006e', icon: 'book' },
];

function ListingEditScreen() {

const location = useLocation();



  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: []
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images"/>
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories} 
          name="category" 
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category" 
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
