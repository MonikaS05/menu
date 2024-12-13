let cart = [];

        function addToCart(item, price) {
            cart.push({ item, price });
            alert(item + ' added to cart!');
        }

        function viewOrder() {
            if (cart.length === 0) {
                alert("No items in the cart!");
                return;
            }
            let orderDetails = "Your Order:\n";
            let totalPrice = 0;
            cart.forEach((order, index) => {
                orderDetails += `${index + 1}. ${order.item} - ₹${order.price}\n`;
                totalPrice += order.price;
            });
            orderDetails += `\nTotal Price: ₹${totalPrice}`;
            alert(orderDetails);
        }
        let helpTouchCount = 0;

function showMenuOptions() {
    document.body.style.backgroundImage = "url('assests/img2.jpg')"; // Set background image
    document.body.style.backgroundSize = 'cover'; 
    document.body.style.backgroundPosition = 'center';
    document.body.style.margin = '0'; 
    document.body.style.height = '100vh'; 
    const menuOptions = `
        <div style="text-align: center; padding-top: 20%;">
            <div>
                <button 
                    id="needHelpButton"
                    style="width: 15%; background-color: black; padding: 10px; font-size: 20px; border-radius: 20px; color: white; border: none; cursor: pointer;letter-spacing: 1px;" 
                    onclick="handleNeedHelpTouch()"
                >
                    Need Help
                </button>
                <p id="helpMessage" style="font-size: 18px; color: #000; margin-top: 10px;"></p>
            </div>
            <div>
                <button 
                   style="width: 15%; background-color: black; padding: 10px; font-size: 20px; border-radius: 20px; color: white; border: none; cursor: pointer;" 
                    onclick="handleTouch()"
                >
                    Choose Menu
                </button>
            </div>
        </div>
    `;
    document.body.innerHTML = menuOptions;
}

function handleNeedHelpTouch() {
    const helpMessage = document.getElementById('helpMessage');
    if (helpTouchCount === 0) {
        helpMessage.textContent = 'If you are feeling difficulty in choosing the menu, can I help you.!!';
        helpTouchCount++;
    } else {
        location.href = 'needhelp.html';
    }
}
function handleTouch() {
    const helpMessage = document.getElementById('helpMessage');
    if (helpTouchCount === 1) {
        helpMessage.textContent = 'Are you ready to taste our delicious food...!!';
        helpTouchCount++;
    } else {
        location.href = 'menu.html';
    }
}
 // Function to play the "Please rotate your mobile" voice message
 function playAudioMessage() {
    const audio = new Audio('https://api.voicerss.org/?key=528dae2033624bf2988f5698ca622cbe&hl=en-us&src=Please+rotate+your+mobile');
    audio.play();
  }

  // Function to check screen orientation
  function checkOrientation() {
    const alertBox = document.getElementById('rotate-alert');
    if (window.innerHeight > window.innerWidth) {
      alertBox.style.display = 'block'; // Show alert if in portrait
      playAudioMessage();
    } else {
      alertBox.style.display = 'none'; // Hide alert if in landscape
    }
  }
