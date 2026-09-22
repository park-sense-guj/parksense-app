const { withEntitlementsPlist } = require('expo/config-plugins');

/**
 * expo-notifications always adds the `aps-environment` entitlement, but the free/personal
 * Apple Developer team on this machine cannot get the Push Notifications capability approved,
 * which fails codesigning ("Provisioning Profile ... does not support the Push Notifications
 * capability"). Local notifications don't need this entitlement, so drop it until there's a
 * paid Apple Developer account to register remote push with.
 */
function withoutPushEntitlement(config) {
  return withEntitlementsPlist(config, (mod) => {
    delete mod.modResults['aps-environment'];
    return mod;
  });
}

module.exports = withoutPushEntitlement;
