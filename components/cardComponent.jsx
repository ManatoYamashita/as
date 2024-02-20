import styles from "../styles/cardComponent.module.css";
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';

export function Card({title, imgUrl, text, url}) {
    return(
        <CCard className={styles.wrap}>
            <CCardImage orientation="top" src={ imgUrl } />
            <CCardBody>
                <CCardTitle className={styles.title}>{ title }</CCardTitle>
                <CCardText>
                { text }
                </CCardText>
                <CButton href={ url }>Pray!</CButton>
            </CCardBody>
        </CCard>
    );
}