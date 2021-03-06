import React from 'react';


const ShareModal = () => {
	return(
		<div class="modal" id="shareModal">
		    <div class="modal-dialog">
		        <div class="modal-content">

		            <div class="modal-header">
		                <h4 class="modal-title">Share</h4>
		                <button type="button" class="close" data-dismiss="modal">&times;</button>
		            </div>

		            <div class="modal-body">
		                
		                <div class="connection-modal">
		                    
		                    <div class="connection-modal-single">

		                        <div class="form-group mx-auto mt-20" Style={{"max-width": "350px"}}>
		                            <label>Direct Link</label>
		                            <div class="input-group">
		                                <input type="text" class="form-control readonly" id="direct-share-link"  readonly
		                                value="share_link" />
		                                <button type="button" class="btn btn-blue btn-sm"  Style={{"border-radius":"0", "height": "35px;"}}>
		                                    <i class="fa fa-copy"></i>
		                                    Copy
		                                </button>
		                            </div>
		                        </div>

		                    </div>    

		                    <div class="text-center bt-1-ddd bb-1-ddd pt-10 pb-10 mt-20 mb-20 mr-65 ml-65">
		                        Share on Social Media
		                    </div>

		                    <div class="connection-modal-social">


		                        <a href="https://www.facebook.com/sharer/sharer.php?u=" target="_blank" class="fb_color_bg">
		                            <span class="fa fa-facebook-f"></span>
		                        </a>

		                        <a href="https://twitter.com/home?status=" class="twitter_color_bg" target="_blank">
		                            <span class="fa fa-twitter"></span>
		                        </a>

		                        <a href="whatsapp://send?text=" target="_blank" class="whatsapp_color_bg">
		                            <span class="fa fa-whatsapp"></span>
		                        </a>

		                        <a href="mailto:?subject=share_text&body=" target="_blank" Style={{"background": "#f66"}}>
		                            <span class="fa fa-envelope"></span>
		                        </a>

		                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=" target="_blank" class="linkedin_color_bg">
		                            <span class="fa fa-linkedin"></span>
		                        </a>

		                        <a href="http://pinterest.com/pin/create/button/?url=" target="_blank" class="pinterest_color_bg">
		                            <span class="fa fa-pinterest"></span>
		                        </a>

		                    </div>

		                </div>    

		            </div>

		            <div class="modal-footer">
		                <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
		            </div>

		        </div>
		    </div>
		</div>

		)
}
export default ShareModal;