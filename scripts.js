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

        updateImg(obj.detail.amount.current, obj.detail.amount.target);


    });
    
    document.addEventListener('goalEvent', function(obj) {
        // obj.detail will contain information about the goal
        console.log(obj.detail);
        $('#goal-current').text(obj.detail.amount.current);

        updateImg(obj.detail.amount.current, obj.detail.amount.target);
    });

    

    function updateImg(cur, target){
        
        let percent = cur/target * 100;
        console.log(percent)

        if(percent == 0){
            $('#img-bar').attr('src', 'https://github.com/nirajlmali/StreamlabsCustomBar/blob/main/images/Megaman%20X%20Life%20Follower%20Bar%200%20(Empty).png?raw=true')
        }
        else{
            let i = 0;
            for (i = 2; i < 100; i+=2) {
                if (percent <= i) {
                    let pic_idx = i/2;
                    let pic_src = 'https://github.com/nirajlmali/StreamlabsCustomBar/blob/main/images/Megaman%20X%20Life%20Follower%20Bar%20' + pic_idx + '.png?raw=true';
                    console.log(pic_src);
                    $('#img-bar').attr('src', pic_src);
                    break;
                }
            }
            if(i >= 100){
                $('#img-bar').attr('src', 'https://github.com/nirajlmali/StreamlabsCustomBar/blob/main/images/Megaman%20X%20Life%20Follower%20Bar%2050%20(Full).png?raw=true');
            } 
        }
    }