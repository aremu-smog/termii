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
```

### Developed by Aremu Smog
[Twitter](https://twitter.com/aremu_smog) | [Instagram](https://instagram.com/aremu_smog) | [Website](http://aremu-smog.herokuapp.com)

Greatly Inspired by [Ashinze Ekene](https://twitter.com/ashinzekene)'s [paystack-simple](https://github.com/ashinzekene/paystack-simple)