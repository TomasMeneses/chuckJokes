import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 100%;
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
        display: flex;
        max-width: 800px;
        justify-content: center;
        align-items: left;
        flex-direction: column;
    }

    .joke-container {
        display: flex;
        flex-direction: row;
        img {
            width: 50px;
            height: 50px;
            margin: 10px;
        }

        h3 {
            margin: 10px;
        }
    }

`