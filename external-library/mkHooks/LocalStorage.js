import {useEffect, useState} from 'react'



//  localStorage setItem
export function setItem(key, value){
 try{
  window.localStorage.setItem(key, JSON.stringify(value));
 } catch(error){
  console.log(error);
 }
};

// localStorage getItem
export function getItem(key){
 try{
  const item = window.localStorage.getItem(key);
  return item? JSON.parse(item): undefined;
 } catch(error){
  console.log(error);
 }
}

export function usePersistState(key, initialValue){
 const [value, setValue] = useState(()=>{
  const item = getItem(key);
  return item || initialValue;
 })

 useEffect(()=>{
  setItem(key, value)
 }, [value])

 return [value, setValue]  
}
