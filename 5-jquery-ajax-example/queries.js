const returnMessageObject = messageObj => {
  return `<div class="messageItem">
    <p> UserId: ${messageObj.userId} | ${messageObj.message} </p>
    Sent at: ${messageObj.timestamp}
    </div>
    `;
};

const updateMessages = () => {
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/chat?pageSize=10&pageIndex=0"
  }).then(data => {
    const messagesDiv = document.getElementById("messages");

    $("#messages").text("");
    data
      .filter(x => x.userId && x.message && x.timestamp)
      .reverse()
      .map(x => {
        $("#messages").append(returnMessageObject(x));
      });

    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  });
};

$(document).ready(updateMessages());

$("#sendButton").click(e => {
  e.preventDefault();

  const userId = $("#userId").val();
  const message = $("#message").val();

  if (!userId || !message) {
    alert("UserId or Message cannot be null");
    return;
  }

  $.ajax({
    type: "POST",
    url: "http://localhost:3000/chat/",
    data: {
      userId: parseInt(userId),
      message,
      timestamp: new Date()
    },
    success: data => {
      console.log(data);
    },
    error: err => {
      console.log(err);
      alert(err);
    }
  }).then(() => {
    updateMessages();
  });
});
