const TERMII_URL = "https://termii.com/api/sms/number/send";

const Termii = () => {
  let data = {
    type: "plain",
    channel: "generic",
    api_key: "",
    notify_url: "",
    notify_id: "",
  };
  const send_sms = (to, message, from) => {
    if (data.api_key == "") {
      alert("Visit wwww.termii.com/dashboard to get your api key");
    } else {
      fetch(TERMII_URL, {
        type: "POST",
        body: JSON.stringify({
          to,
          message,
          from,
          ...data,
        }),
        header: {
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
};

export default Termii;
