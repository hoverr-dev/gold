$(function () {
  $('.slider').slick({
    centerMode: true,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 5,
    infinite: true,
    speed: 300,
    prevArrow: '<button class="slick-prev" type="button"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.82968 14.0003C6.68028 14.0008 6.53267 13.9678 6.39769 13.9038C6.26271 13.8398 6.14379 13.7463 6.04968 13.6303L1.21968 7.63028C1.07259 7.45134 0.992188 7.2269 0.992188 6.99528C0.992188 6.76365 1.07259 6.53921 1.21968 6.36028L6.21968 0.360276C6.38941 0.156059 6.63333 0.0276347 6.89775 0.00325494C7.16218 -0.0211248 7.42546 0.0605371 7.62968 0.230276C7.83389 0.400014 7.96232 0.643926 7.9867 0.908352C8.01108 1.17278 7.92941 1.43606 7.75968 1.64028L3.28968 7.00028L7.60967 12.3603C7.73196 12.5071 7.80964 12.6858 7.83351 12.8753C7.85739 13.0649 7.82648 13.2573 7.74442 13.4299C7.66237 13.6024 7.53261 13.7478 7.3705 13.8489C7.20838 13.95 7.02071 14.0025 6.82968 14.0003Z" fill="white" /></svg></button>',
    nextArrow: '<button class="slick-next" type="button"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.17032 -0.000275612C1.31972 -0.00078392 1.46733 0.0321884 1.60231 0.0962172C1.73729 0.160246 1.85621 0.253705 1.95032 0.369725L6.78032 6.36972C6.92741 6.54866 7.00781 6.7731 7.00781 7.00472C7.00781 7.23635 6.92741 7.46079 6.78032 7.63972L1.78032 13.6397C1.61059 13.8439 1.36667 13.9724 1.10225 13.9967C0.837822 14.0211 0.574541 13.9395 0.370325 13.7697C0.166108 13.6 0.037684 13.3561 0.0133042 13.0916C-0.0110755 12.8272 0.0705857 12.5639 0.240324 12.3597L4.71032 6.99972L0.390325 1.63972C0.268042 1.49294 0.190365 1.3142 0.166485 1.12465C0.142606 0.935102 0.173522 0.742677 0.255579 0.570149C0.337635 0.397622 0.467394 0.252211 0.629505 0.15112C0.791615 0.0500298 0.979291 -0.00250721 1.17032 -0.000275612Z" fill="white" /></svg></button>',
  });

  $(".slider").slick("slickGoTo", 1);
});