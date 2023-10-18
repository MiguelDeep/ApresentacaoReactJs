import styled from "styled-components";

export const H1 = styled.h1`
    text-align: center;
    margin-bottom:100px;

`

export const Container = styled.div`
     padding: 50px;
    max-width: max-content;
    margin: auto;
    h3{
        text-align: center;
        font-weight: 100;
         color: gray;
        
    }
    aside{
        display: grid;
    max-width: max-content;
    margin: auto; 
    }
    nav{
        background-color:white;
    width: 400px;
    max-height: max-content;
    border-radius: 10px; 
    }
`
export const Div = styled.div`
  background-color:rgb(62, 203, 210);
 max-width: 400px;
 height: 130px;
 border-radius: 10px 10px 0 0;
 `
export const Imag = styled.img`
   display: block;
    width: 100px;
    border-radius: 100%;
    margin: -45px auto;
    padding-bottom: 10px;
 `
export const Name = styled.h1`
     text-align: center;
    padding: 35px;
    >span{
        padding-left:10px ;
    color: gray;  
    }
 `
export const LiFollowers = styled.li`
   
     margin: auto;
    font-size: 30px;
    font-weight: bolder;
    margin-left: 6px;
    list-style: none;
 `
export const Ul = styled.ul`
  display: flex;
    list-style: none;
 `
export const LiName = styled.li`
  margin: auto; 
    color: gray;
    max-width: max-content;
    margin-right: 10px;
`