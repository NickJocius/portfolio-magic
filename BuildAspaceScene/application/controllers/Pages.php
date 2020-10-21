<?php

/*
 * Name: Nick Jocius
 * Intermediate Web
 * Purpose: Pages.php for MVC coding07 assignment
 * Date: 10/12/2020
 */

class Pages extends CI_Controller
{

    public function view($page = 'home')
    {
        if (!file_exists(APPPATH . 'views/pages/' . $page . '.php')) {
            show_404();
        }


        if ($page == 'home') {
            $data = array(
                'title' => ucfirst($page),
                "localtime" => date('l jS \of F Y h:i:s A'),
                'pagejs' => 'home.js'
            );
            $this->load->view('templates/header', $data);
            $this->load->view('templates/navbar', $data);
            $this->load->view('pages/' . $page, $data);
            $this->load->view('templates/footer', $data);
        } else if ($page == 'about') {
            $data = array(
                'title' => ucfirst($page),
                "localtime" => date('l jS \of F Y h:i:s A'),
                'pagejs' => 'about.js'
            );
            $this->load->view('templates/header', $data);
            $this->load->view('templates/navbar', $data);
            $this->load->view('pages/' . $page, $data);
            $this->load->view('templates/footer', $data);
        }
    }
}
