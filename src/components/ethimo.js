import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';



const Ethimo = (props) => {

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '60vh', backgroundColor: '#98A080' }}>
                <img src="logo.png" alt="logo" width="250" />
            </div >
            <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '40vh', backgroundColor: '#FFFFFF', borderBottom: '1px solid' }}>
                <div style={{ maxWidth: '800px' }}>
                    <div className="fs14 fw700 text-center">ETHIMO IS ABOUT</div>
                    <div className="fs12">Παράδοση με μια σύγχρονη οπτική και έμφαση στην ποιότητα και την υγιεινή διατροφή είναι το κίνητρο και ο στόχος μας.
                        Η παραδοσιακή ελληνική διατροφή είναι γνωστή τόσο για τη νοστιμιά και την ποιότητα που προσφέρει όσο και για σαν ένα ισορροπημένο μοντέλο αυθεντικότητας και γεύσης.
                        Το φημισμένο έξτρα παρθένο ελαιόλαδο, οι ελιές, το μέλι, τα ιδιαίτερα γλυκίσματα και ποτά αλλά και τα αρωματικά βότανα και μυρωδικά από κάθε γωνιά της χώρας αποτελούν τη βάση της φημισμένης ελληνικής διατροφής.
                        Φιλοδοξία μας είναι να δούμε ξανά όλους αυτούς τους γευστικούς θησαυρούς με μια μοντέρνα ματιά και να τους κλείσουμε σε πρακτικές και όμορφες συσκευασίες που προσδίδουν ένα σύγχρονο τόνο σε αυτά τα διαλεχτά προϊόντα.
                        Γνώμονας σε κάθε μας επιλογή είναι η ελληνικότητα, η ποιότητα και φυσικά η ιδιαιτερότητα που προσφέρει το κάθε προϊόν ξεχωριστά. Αυτήν την ιδιαιτερότητα σε γεύση και θρεπτικές αξίες είναι που προσπαθούμε να τονίσουμε με τις ιδιαίτερες συσκευασίες και τις πληροφορίες που περιέχουν για το κάθε προϊόν.
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '5vh', backgroundColor: '#FFFFFF' }}>
                <div className="fw700">OUR PRODUCTS</div>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '40vh', backgroundColor: '#98A080' }}>

            </div>
        </>
    );
}

export default Ethimo;