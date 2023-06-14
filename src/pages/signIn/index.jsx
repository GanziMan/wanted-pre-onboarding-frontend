const SignIn = () => {
  return (
    <table>
      <tr>
        <td>이메일</td>
        <td>
          <input type="text"></input>
        </td>
      </tr>
      <tr>
        <td>비밀번호</td>
        <td>
          <input type="password" />
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <input type="submit" value="회원가입" />
          <input type="submit" value="로그인" />
        </td>
      </tr>
    </table>
  );
};

export default SignIn;
