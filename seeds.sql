INSERT INTO users (name, password) VALUES ('Deion', 'password1');
SELECT @last := LAST_INSERT_ID();
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('Deion','Instagram', 'fbPass!', @last);
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('D','Facebook', 'instaPass!', @last);
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('Dee','Twitter', 'fbPgfcfass!', @last);
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('DGA','Amazon', 'amazonPass!', @last);

INSERT INTO users (name, password) VALUES ('Amiel', 'password2');
SELECT @last := LAST_INSERT_ID();
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('Amiel','Instagram', 'fbPass!', @last);
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('AN','Facebook', 'instaPass!', @last);


INSERT INTO users (name, password) VALUES ('Claudia', 'password2');
SELECT @last := LAST_INSERT_ID();
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('Claudia','Instagram', 'fbPass!', @last);
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('C','Facebook', 'instaPass!', @last);


INSERT INTO users (name, password) VALUES ('Christian', 'password2');
SELECT @last := LAST_INSERT_ID();
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('Christian','Instagram', 'fbPass!', @last);
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('Chris','Facebook', 'instaPass!', @last);
INSERT INTO passwords (user_name, type, password, user_id) VALUES ('C','Twitter', 'fbPgfcfass!', @last);
