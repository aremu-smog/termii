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
termiiInstance.send_sms('234THE_TARGET_NUMBER','Your message','SENDER_ID')
```

### Developed by Aremu Smog
[Twitter](https://twitter.com/aremu_smog) | [Instagram](https://instagram.com/aremu_smog) | [Website](http://aremu-smog.herokuapp.com)