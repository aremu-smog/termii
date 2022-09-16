const TERMII_URL = "https://api.ng.termii.com";

const Termii = () => {
  let data = {
    type: "plain",
    media_url: "",
    api_key: "",
    notify_url: "",
    notify_id: "",
  };

  const send_sms = (to, message, from, channel = "generic") => {
    //Check if API key was set
    if (data.api_key === "") {
      alert("Visit https://termii.com/account/api to get your api key");
    } else {
      //Send POST Request to Termii's API
      fetch(TERMII_URL, {
        method: "POST",
        body: JSON.stringify({
          to,
          sms: message,
          from,
          ...data,
          channel,
        }),
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          return data;
        })
        .catch((error) => {
          return error;
        });
    }
  };

  const send_otp = (to, from, channel = "generic") => {
    //Check if API key was set
    if (data.api_key === "") {
      alert("Visit https://termii.com/account/api to get your api key");
    } else {
      //Send POST Request to Termii's API
      fetch(`${TERMII_URL}/otp/send`, {
        method: "POST",
        body: JSON.stringify({
          api_key: data.api_key,
          message_type : "NUMERIC",
          to : to,
          from : from,
          channel : channel,
          pin_attempts : 10,
          pin_time_to_live :  5,
          pin_length : 6,
          pin_placeholder : "< 1234 >",
          message_text : "Your pin is < 1234 >",
          pin_type : "NUMERIC"
      }),
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          return data;
        })
        .catch((error) => {
          return error;
        });
    }
  };

  const verify_otp = (pin_id, pin) => {
    //Check if API key was set
    if (data.api_key === "") {
      alert("Visit https://termii.com/account/api to get your api key");
    } else {
      //Send POST Request to Termii's API
      fetch(`${TERMII_URL}/otp/verify`, {
        method: "POST",
        body: JSON.stringify( {
          api_key: data.api_key,
          pin_id,
          pin
       }),
        headers: {
          "Content-Type": "Application/json",
          Accept: "Application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          return data;
        })
        .catch((error) => {
          return error;
        });
    }
  };

  const setApi = (key) => {
    data.api_key = key;
  };

  return {
    setApi,
    send_sms,
    send_otp,
    verify_otp,
  };
};

export default Termii;
