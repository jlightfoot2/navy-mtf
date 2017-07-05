import {ProductInterface} from '../res/data/products';
import {nextId} from './_helper';
export const UPDATE_PRODUCT = 'T2.UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'T2.DELETE_PRODUCT';
export const ADD_HOSPITAL_FAVORITES = 'T2.ADD_HOSPITAL_FAVORITES';
export const REMOVE_HOSPITAL_FAVORITES = 'T2.REMOVE_HOSPITAL_FAVORITES';
export const WINDOW_RESIZE = 'T2.WINDOW_RESIZE';
export const SET_PAGE_TITLE = 'T2.SET_PAGE_TITLE';
export const SORT_HOSPITALS = 'T2.SORT_HOSPITALS';
export const SET_USER_LOCATION = 'T2.SET_USER_LOCATION';

export const updateProduct = (product:ProductInterface) => {
  return {
    type: UPDATE_PRODUCT,
    product
  }
}

export const sortHospitals = (sortBy: string, sortDir = 'asc') => {
  return {
    type: SORT_HOSPITALS,
    sortBy,
    sortDir
  }
}

export const setUserLocation = (latitude: number, longitude: number) => {
  return {
    type: SET_USER_LOCATION,
    latitude,
    longitude
  }
}

export const setPageTitle = (title:string) => {
  return {
    type: SET_PAGE_TITLE,
    title: title
  }
}

export const saveProduct = (product:ProductInterface) => {
  return (dispatch,getState) => {
    if(product.id === 0){
      product.id = nextId(getState().productIds);
    }
    dispatch(updateProduct(product));
  }
}

export const deleteProduct = (id:number) => {
  return {
    type: DELETE_PRODUCT,
    id
  }
}

export const addHospitalToFavorites = (hospitalId:number) => {
  return {
    type: ADD_HOSPITAL_FAVORITES,
    id: hospitalId
  }
}

export const removeHospitalFromFavorites = (hospitalId:number) => {
  return {
    type: REMOVE_HOSPITAL_FAVORITES,
    id: hospitalId
  }
}

export const windowResize = (width:number,height: number) => {
  return {
    type: WINDOW_RESIZE,
    width,
    height
  }
}

