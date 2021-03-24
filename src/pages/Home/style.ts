import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .categories{
        display: flex;
    }

    .input-group{
        input,button, select {
           border-radius: 5px;
           outline: none;
           border: none;
           width: 300px;
           height: 40px;
           font-size: 20px;
           padding: 5px;
           margin: 10px;
        }
        input:focus {
            outline: auto;
            outline-color: #1eb66e;
        }

        select, button {
            width: 150px;
        }
        
        

    }
    .search-joke-container {
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .joker{
        display: block;
    }

`