var poll_id=0,poll_answer_id="",is_being_voted=!1;pollsL10n.show_loading=parseInt(pollsL10n.show_loading);pollsL10n.show_fading=parseInt(pollsL10n.show_fading);
function poll_vote(b){jQuery(document).ready(function(a){is_being_voted?alert(pollsL10n.text_wait):(set_is_being_voted(!0),poll_id=b,poll_answer_id="",poll_multiple_ans_count=poll_multiple_ans=0,a("#poll_multiple_ans_"+poll_id).length&&(poll_multiple_ans=parseInt(a("#poll_multiple_ans_"+poll_id).val())),a("#polls_form_"+poll_id+" input:checkbox, #polls_form_"+poll_id+" input:radio, #polls_form_"+poll_id+" option").each(function(b){if(a(this).is(":checked")||a(this).is(":selected"))0<poll_multiple_ans?
	(poll_answer_id=a(this).val()+","+poll_answer_id,poll_multiple_ans_count++):poll_answer_id=parseInt(a(this).val())}),0<poll_multiple_ans?0<poll_multiple_ans_count&&poll_multiple_ans_count<=poll_multiple_ans?(poll_answer_id=poll_answer_id.substring(0,poll_answer_id.length-1),poll_process()):0==poll_multiple_ans_count?(set_is_being_voted(!1),alert(pollsL10n.text_valid)):(set_is_being_voted(!1),alert(pollsL10n.text_multiple+" "+poll_multiple_ans)):0<poll_answer_id?poll_process():(set_is_being_voted(!1),
	alert(pollsL10n.text_valid)))})}function poll_process(){jQuery(document).ready(function(b){poll_nonce=b("#poll_"+poll_id+"_nonce").val();pollsL10n.show_fading&&b("#polls-"+poll_id).fadeTo("def",0);pollsL10n.show_loading&&b("#polls-"+poll_id+"-loading").show();b.ajax({type:"POST",xhrFields:{withCredentials:!0},url:pollsL10n.ajax_url,data:"action=polls&view=process&poll_id="+poll_id+"&poll_"+poll_id+"="+poll_answer_id+"&poll_"+poll_id+"_nonce="+poll_nonce,cache:!1,success:poll_process_success})})}
function poll_result(b){jQuery(document).ready(function(a){is_being_voted?alert(pollsL10n.text_wait):(set_is_being_voted(!0),poll_id=b,poll_nonce=a("#poll_"+poll_id+"_nonce").val(),pollsL10n.show_fading&&a("#polls-"+poll_id).fadeTo("def",0),pollsL10n.show_loading&&a("#polls-"+poll_id+"-loading").show(),a.ajax({type:"POST",xhrFields:{withCredentials:!0},url:pollsL10n.ajax_url,data:"action=polls&view=result&poll_id="+poll_id+"&poll_"+poll_id+"_nonce="+poll_nonce,cache:!1,success:poll_process_success}))})}
function poll_booth(b){jQuery(document).ready(function(a){is_being_voted?alert(pollsL10n.text_wait):(set_is_being_voted(!0),poll_id=b,poll_nonce=a("#poll_"+poll_id+"_nonce").val(),pollsL10n.show_fading&&a("#polls-"+poll_id).fadeTo("def",0),pollsL10n.show_loading&&a("#polls-"+poll_id+"-loading").show(),a.ajax({type:"POST",xhrFields:{withCredentials:!0},url:pollsL10n.ajax_url,data:"action=polls&view=booth&poll_id="+poll_id+"&poll_"+poll_id+"_nonce="+poll_nonce,cache:!1,success:poll_process_success}))})}
function poll_process_success(b){jQuery(document).ready(function(a){a("#polls-"+poll_id).replaceWith(b);pollsL10n.show_loading&&a("#polls-"+poll_id+"-loading").hide();pollsL10n.show_fading&&a("#polls-"+poll_id).fadeTo("def",1);set_is_being_voted(!1)})}function set_is_being_voted(b){is_being_voted=b};