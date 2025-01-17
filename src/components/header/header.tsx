import {Link, useNavigate} from 'react-router-dom';
import {AppPages} from '../../const.ts';
import './header-style.css';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {logoutAction} from '../../api/actions.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {AuthStatus} from '../../api/const.ts';
import {memo} from 'react';
import {selectAuthStatus, selectUserData} from '../../store/user-slice/selectors.ts';

function Header() {
  const authStatus = useAppSelector(selectAuthStatus);
  const user = useAppSelector(selectUserData);
  const isAuth = authStatus === AuthStatus.AUTH;

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleSignOut = () => {
    if (isAuth) {
      dispatch(logoutAction());
    } else {
      navigate(AppPages.LOGIN);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppPages.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                user && (
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppPages.FAVORITES}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        <img src={user.avatarUrl} alt=''/>
                      </div>
                      <span className="header__user-name user__name">{user.email}</span>
                      {/*todo*/}
                      <span className="header__favorite-count">3</span>
                    </Link>
                  </li>
                )
              }
              <li className="header__nav-item">
                <button className="header__nav-link sign-out" onClick={handleSignOut}>
                  <span className="header__signout">{isAuth ? 'Sign out' : 'Sign in'}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const MemoizedHeader = memo(Header);
export { MemoizedHeader as Header };
