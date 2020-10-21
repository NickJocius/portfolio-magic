<?php

/*
 * Name: Nick Jocius
 * Intermediate Web
 * Purpose: Contact.php for MVC coding07 assignment
 * Date: 10/17/2020
 */

defined('BASEPATH') or exit('No direct script access allowed');

class Contact extends CI_Controller
{


    public function ajaxRequestPost()

    {
        function mymail($to, $subject, $message, $headers)
        {
            return true;
        }

        if (!empty($_POST)) {

            //get input from $_POST
            $name = $_POST['name'];
            $from = $_POST['email'];
            $feedback = $_POST['comment'];
            $rating = $_POST['rating'];

            //trim input
            $name = trim($name);
            $feedback = trim($feedback);
            $rating = trim($rating);

            //validate email/if not valid send empty string
            if (filter_var($from, FILTER_VALIDATE_EMAIL)) {
                $from = trim($from);
                $from = strip_tags(substr($from, 0, 64));
            } else {
                $from = '';
            }

            //strip input
            $name = strip_tags(substr($name, 0, 64));
            $feedback = strip_tags(substr($feedback, 0, 64));
            $rating = strip_tags(substr($rating, 0, 2));

            /* The cleaning routines above may leave any variable empty. If we
             * find an empty variable, we stop processing because that means
             * someone tried to send us something malicious or incorrect. */
            if (!empty($name) && !empty($from) && !empty($feedback) && !empty($rating)) {

                /* this forms the correct email headers to send an email */
                $headers = "From: $from\r\n";
                $headers .= "Reply-To: $from\r\n";
                $headers .= "MIME-Version: 1.0\r\n";
                $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";

                /* Now attempt to send the email. This uses a dummy email function
                 * because the student email server will not send mail. On a real
                 * server, you would use just "mail" instead of "mymail" and
                 * it will be sent normally.
                 */
                if (mymail('youremail@g.austincc.edu', $feedback, $name . 'wrote...\n\n' . $rating, $headers)) {

                    echo "feedback submitted";
                } else {

                    echo "error";
                }
            } else {

                echo "error";
            }
        } else {

            echo "error";
        }
    }
}
