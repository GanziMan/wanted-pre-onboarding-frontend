const SignUp = () => {
  return (
    <table>
      <tr>
        <td>이메일</td>
        <td>
          <input type="text" data-testid="email-input"></input>
        </td>
      </tr>
      <tr>
        <td>비밀번호</td>
        <td>
          <input type="password" data-testid="password-input" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <input type="submit" data-testid="signup-button" value="회원가입" />
        </td>
      </tr>
    </table>
  );
};

export default SignUp;
