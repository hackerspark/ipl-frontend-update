<script>
  import {
    Header,
    SideNav,
    SideNavItems,
    SideNavLink,
    Content,
    Grid,
    Row,
    Column,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    HeaderUtilities,
    HeaderAction,
    HeaderPanelLinks,
    HeaderPanelLink,
  } from 'carbon-components-svelte';
  import Router, { location, push, replace } from 'svelte-spa-router';

  import routes from './routes';
  import { userStore } from './stores/user';
  import { titleLookup } from './lookups/titleLookup';
  import { bidStore } from './stores/bid';
  import {
    userNavLinks,
    adminNavLinks,
    defaultNavLinks,
  } from './lookups/navLinks';

  let isSideNavOpen = false;
  let navLinks = [];
  let isOpen = false;
  let isLoggedIn = false;

  function conditionsFailed(event) {
    if ($bidStore) {
      replace('/bidControls');
    } else {
      replace('/');
    }
  }

  let title;

  $: title = titleLookup[$location] ?? 'Invalid Link';

  $: document.title = title ? `${title}` : 'Invalid Link';

  $: isLoggedIn = $userStore.type === 'USER' || $userStore.type === 'ADMIN';

  userStore.subscribe((user) => {
    if (user.type === 'USER') {
      navLinks = userNavLinks;
    } else if (user.type === 'ADMIN') {
      navLinks = adminNavLinks;
    } else {
      navLinks = defaultNavLinks;
    }
  });

  function logout() {
    userStore.update(() => ({
      username: undefined,
      password: undefined,
      type: undefined,
    }));
    push('/');
  }
</script>

<Header
  persistentHamburgerMenu={isLoggedIn}
  company="IPL"
  platformName="Bidding"
  bind:isSideNavOpen
  href="#/"
>
  <HeaderNav>
    <HeaderNavItem href="#/teams" text="Teams" />
  </HeaderNav>
  {#if isLoggedIn}
    <HeaderUtilities>
      <HeaderAction bind:isOpen>
        <HeaderPanelLinks>
          <HeaderPanelLink href="#/" on:click={logout}>Logout</HeaderPanelLink>
        </HeaderPanelLinks>
      </HeaderAction>
    </HeaderUtilities>
  {/if}
</Header>
{#if navLinks.length}
  <SideNav bind:isOpen={isSideNavOpen}>
    <SideNavItems>
      {#each navLinks as link}
        <SideNavLink
          text={link.text}
          href={link.href}
          isSelected={window.location.hash === link.href}
        />
      {/each}
    </SideNavItems>
  </SideNav>
{/if}
<div class="background">
  <div class="blur">
    <Router {routes} on:conditionsFailed={conditionsFailed} />
  </div>
</div>

<style>
  .background {
    background-image: url(https://i2.wp.com/background4free.com/download/blue_black_electric_blue_633655579.jpg?q=100);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    width: 100%;
  }

  .blur {
    /* background: rgba(255, 255, 255, 0.2); */
    /* backdrop-filter: blur(2px); */
    height: 100vh;
    width: 100%;
  }
</style>
