// Events will be sent when someone followers
// Please use event listeners to run functions.

document.addEventListener('goalLoad', function(obj) {
    // obj.detail will contain information about the current goal
    // this will fire only once when the widget loads
    console.log(obj.detail);

    //Updates the title of the goal
    $('#title').html(obj.detail.title);

    //Updates the current amount reached towards the goal
    $('#goal-current').text(obj.detail.amount.current);

    //Updates the target amount
    $('#goal-total').text(obj.detail.amount.target);

    //Updates the end date of the goal
    $('#goal-end-date').text(obj.detail.to_go.ends_at);
  });
  
  document.addEventListener('goalEvent', function(obj) {
    // obj.detail will contain information about the goal
    console.log(obj.detail);
    $('#goal-current').text(obj.detail.amount.current);
  });