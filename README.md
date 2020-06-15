# Termii
Javascript wrapper for [termii](http://www.termii.com) messaging platform for businesses

# Installation

```
npm install termii
```

# Usage
```
import Termii from 'termii'

const termiiInstance = Termii()

termiiInstance.setApi('YOUR_API_KEY')
termiiInstance.send_sms('+23490THETARGETNUMBER','Your message','SENDER_ID')
```