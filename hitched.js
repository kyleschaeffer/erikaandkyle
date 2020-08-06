// days since
var now = new Date();
var then = new Date('06/07/2014');
var days = (now.getTime() - then.getTime()) / (3600 * 24 * 1000);
var daysFormatted = days.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
document.getElementById('since').innerText = daysFormatted;

// quiz
var quiz = 0;
$('.question').each(function(i){
    
    // question
    var question = $(this);
    
    // hide questions
    if(i > 0){
        $(question).hide();
    }
    
    // answer
    $(question).children('.yes,.no').on('click', function(){
        
        // correct answer
        if($(this).is('[data-ohyeah]')){
            quiz++;
        }
        
        // hide
        $(question).addClass('spinout').animate({
            opacity: 1
        }, 475, function(){
            $(this).hide();
        });
        
        // next question?
        if($(question).next('.question').size() > 0){
            $(question).next('.question').addClass('spinin').show();
        }
        
        // done?
        else {
            
            // grade
            var grade = quiz / $('.question').size();
            
            // fail?
            if(grade <= 0.5){
                $('.quiz-fail').addClass('spinin').show().find('.grade').html(Math.round(grade * 100) + '%');
            }
            
            // pass?
            else {
                $('.quiz-pass').addClass('spinin').show().find('.grade').html(Math.round(grade * 100) + '%');
            }
            
        }
        
    });
    
});