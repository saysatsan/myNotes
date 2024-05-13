import { Form } from 'formik';
import styled from 'styled-components';

export const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px 20px;

    @media (max-width: 420px) {
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
`;