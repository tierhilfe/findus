<?php

namespace speedy\common;

/**
 * Class representing a user of the app. 
 *
 * @author binary
 */
class User {
    /**
     * Visitor of the Page. He should at least see the login page. 
     * Nothing more.
     */
    const VISITOR = 1;
    /**
     * Some regular user of the application. Can use most of the app but
     * is unable for example to create new accounts.
     */
    const USER = 3;
    /**
     * This role has the the same permissions as the user role, but can
     * also create statistics and other stuff.
     */
    const MANAGEMENT = 7;
    /**
     * The admin can do everything.... everything!!!
     */
    const ADMIN = 15;
    
    /**
     * Unique ID of the user. Gets generated by the database. If the user
     * is not checked against the database or the check was not successul,
     * this field contains a negativ value.
     * @var type 
     */
    private $id;
    /**
     * The user name. Please note that this is not the login name.
     * @var type 
     */
    private $name;
    
    /**
     * Bitset of the roles the user has. 
     * @var type 
     */
    private $role;
    
    public function __construct($id = 0, $name = 'Gast', $role = 1) {
        $this->id = $id;
        $this->role = $role;
        $this->name = $name;
    }
    
    function getId() {
        return $this->id;
    }

    function getName() {
        return $this->name;
    }

        
    public function isA($role){
        return ($this->role & $role) == $role;
    }
    
    public function isOnlyVisitor(){
        return ($this->role & 1) == 1;
    }
}
