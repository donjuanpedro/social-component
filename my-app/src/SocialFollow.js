import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons"

export default function SocialFollow() {
    return (
        <div>
            <h3>Follow me</h3>
            
 <a
  href="https://www.facebook.com/WalkerLyle/"
  className="facebook social"
>
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://twitter.com/JWalkerLyle" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a
  href="https://www.instagram.com/walkerlyle/"
  className="instagram social"
>
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
            </div>
    );
}