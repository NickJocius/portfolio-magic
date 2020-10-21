<!--
* Name: Nick Jocius
* Intermediate Web
* Purpose: about.php for MVC coding07 assignment
* Date: 10/12/2020
-->

<div class="About container-fluid d-flex align-content-center">
    <div class="row grid-columns d-flex align-items-center">
        <div class="col-sm-4 col-md-2 d-flex align-content-center">
            <form class="m-auto p-2  d-inline-flex flex-column align-content-center justify-content-center">
                <div class="form-group">
                    <label for="name">Your Name:</label>
                    <input type="text" class="form-control" name="name" id="name" placeholder="John Doe">
                </div>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com">
                </div>
                <div class="form-group">
                    <label for="rating">Rate Us:</label>
                    <input type="rating" class="form-control" name="rating" id="rating" placeholder="1-10">
                </div>
                <div class="form-group">
                    <label for="comment">Feedback:</label>
                    <textarea type="text" class="form-control" name="comment" id="comment" placeholder="Please give us feedback" rows="6"></textarea>
                </div>
                <div class="form-group d-inline-flex flex-column flex-sm-row justify-content-center ">
                    <button id="send" type="button" class="btn btn-info btn-sm mx-1">Submit</button>
                    <button id="clear" type="button" class="btn btn-info btn-sm mx-1">Clear</button>
                </div>
            </form>
        </div>
        <div class="info col-sm-8 col-md-10">
            <h1 class="text-center m-2 p-2">About Build A Scene</h1>
            <div class="text-center m-1 p-2">

                <p>Build A Scene was built as a web assignment for my Intermediate Web class as an intro assignment to MVC and the CodeIgniter framework.
                    It is an interactive scene builder website, allowing the user make a selection from the background list on the home page
                    and use draggable images to decorate it to their liking. The about page gives a brief summary describing the project and has a functioning
                    feedback form. The form uses ajax to make a post request and using javascript to add dynamic responses depending on what the user submits.
                </p>
                <p>
                    This site was built utilizing jquery, html, css and javascript for the front-end. The back-end is written in PHP using the CodeIgniter
                    MVC framework.
                </p>
            </div>

        </div>
    </div>
    <!-- Modal HTML -->
    <div id="myModal" class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"></h5>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <ul id="msg"></ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>

                </div>
            </div>
        </div>
    </div>

</div>