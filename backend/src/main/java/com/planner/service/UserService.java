package com.planner.service;

import com.planner.dto.LoginRequest;
import com.planner.exception.PasswordMismatchException;
import com.planner.exception.UserNotFoundException;
import com.planner.model.User;
import com.planner.repository.UserRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class UserService extends UserServiceBase {

    public UserService(UserRepository userRepository) {
        super(userRepository);
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found"));
    }

    public String registerUser(User user) {
        validateUserForRegistration(user);
        user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        userRepository.save(user);
        return "User registered successfully";
    }

    public User loginUser(LoginRequest loginRequest) {
        User user = userRepository.findByUsername(loginRequest.getUsername());
        if (user == null) {
            throw new UserNotFoundException("User not found");
        }
        if (!BCrypt.checkpw(loginRequest.getPassword(), user.getPassword())) {
            throw new PasswordMismatchException("Invalid password");
        }
        return user;
    }

    public String deleteUser(Long userId) {
        userRepository.deleteById(userId);
        return "User deleted successfully";
    }

    public String modifyUserDetails(User user, Long userId) {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found"));
        validateUser(user, existingUser);
        existingUser.setUsername(user.getUsername());
        existingUser.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt()));
        existingUser.setEmail(user.getEmail());
        existingUser.setFirstName(user.getFirstName());
        existingUser.setLastName(user.getLastName());
        existingUser.setMobile(user.getMobile());
        existingUser.setCountry(user.getCountry());
        existingUser.setCity(user.getCity());
        existingUser.setAddress(user.getAddress());
        existingUser.setPostalCode(user.getPostalCode());
        userRepository.save(existingUser);
        return "User details modified successfully";
    }

    public String changePassword(Long userId, String currentPassword, String newPassword) {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found"));
        validatePasswordChange(currentPassword, newPassword, existingUser);
        existingUser.setPassword(BCrypt.hashpw(newPassword, BCrypt.gensalt()));
        userRepository.save(existingUser);
        return "Password changed successfully";
    }

}