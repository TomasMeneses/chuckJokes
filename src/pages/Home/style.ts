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
            background: #5965e0;
            color: white;
        }
        
        

    }
    .search-joke-container {
        display:flex;
        color: ${props => props.theme.colors.font} ;
        margin-top: 20px;
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

    .joke-list-container {
        display: flex;
        flex-direction: row;
        margin: 10px;
        
        li {
            font-size: 20px;
        }
        span {
            margin: 10px;
        }
    }

    .joke-container {

    }

`