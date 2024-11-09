package com.planner.service;

import com.planner.exception.UserNotFoundException;
import com.planner.exception.PasswordMismatchException;
import com.planner.model.User;
import com.planner.repository.UserRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class UserServiceBase {

    protected final UserRepository userRepository;

    @Autowired
    public UserServiceBase(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    protected void validateUserForRegistration(User user) {
        if (userRepository.findByUsername(user.getUsername()) != null) {
            throw new UserNotFoundException("User already exists");
        }
    }

    protected void validatePasswordChange(String currentPassword, String newPassword, User existingUser) {
        if (existingUser == null) {
            throw new UserNotFoundException("User not found");
        }
        if (!BCrypt.checkpw(currentPassword, existingUser.getPassword())) {
            throw new PasswordMismatchException("Current password is incorrect");
        }
        if (currentPassword.equals(newPassword)) {
            throw new PasswordMismatchException("New password cannot be the same as the current password");
        }
    }

    protected void validateUser(User user, User existingUser) {
        if (isUserNotFound(existingUser)) {
            throw new UserNotFoundException("User not found");
        }
        if (isPasswordEmpty(user.getPassword())) {
            throw new PasswordMismatchException("Password cannot be empty");
        }
        if (isSameAsOldPassword(user.getPassword(), existingUser.getPassword())) {
            throw new PasswordMismatchException("New password cannot be the same as the old password");
        }
    }

    protected boolean isUserNotFound(User user) {
        return user == null;
    }

    protected boolean isPasswordEmpty(String password) {
        return password == null || password.isEmpty();
    }

    protected boolean isSameAsOldPassword(String newPassword, String oldPassword) {
        return BCrypt.checkpw(newPassword, oldPassword);
    }

}