const TERMII_URL = "https://termii.com/api/sms/send";

const Termii = () => {
  let data = {
    type: "plain",
    media_url: "",
    channel: "generic",
    api_key: "",
    notify_url: "",
    notify_id: "",
  };
  const send_sms = (to, message, from) => {
    if (data.api_key == "") {
      alert("Visit https://termii.com/account/api to get your api key");
    } else {
      fetch(TERMII_URL, {
        method: "POST",
        body: JSON.stringify({
          to,
          sms:message,
          from,
          ...data,
        }),
        headers: {
          "Content-Type": "Application/json",
          "Accept": "Application/json",
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

  return{
    setApi,
    send_sms
  }
};

export default Termii;
