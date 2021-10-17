# Termii
<1kb Framework/Library agnostic [termii](http://www.termii.com) 

# Installation

```
npm install termii
```

# Usage
```
import Termii from 'termii'

const termiiInstance = Termii()

//Set API
termiiInstance.setApi('YOUR_API_KEY')

//Send SMS
termiiInstance.send_sms('234THE_TARGET_NUMBER','Your message','SENDER_ID')

//Send WhatsApp Message
termiiInstance.send_sms('234THE_TARGET_NUMBER','Your message','SENDER_ID','whatsapp')
//Take note that whatsapp was added as the fourth parameter

//Send OTP
termiiInstance.send_otp('234THE_TARGET_NUMBER','SENDER_ID','dnd')

//Verify OTP
termiiInstance.verify_otp('XXXXX-XXXXX-XXXX-XXXX','123456')
```

### Developed by Aremu Smog
[Twitter](https://twitter.com/aremu_smog) | [Instagram](https://instagram.com/aremu_smog) | [Website](http://aremu-smog.herokuapp.com)

### Contributors
- Muritala David [Twitter](https://twitter.com/pipe_dev)  | [Github](http://github.com/Fn-studyo)

Greatly Inspired by [Ashinze Ekene](https://twitter.com/ashinzekene)'s [paystack-simple](https://github.com/ashinzekene/paystack-simple)