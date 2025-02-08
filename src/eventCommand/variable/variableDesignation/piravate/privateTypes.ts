import type RpgTypes from "@sigureya/rpgtypes";

export type CommandTypes = {
  [RpgTypes.CHANGE_ENEMY_HP]: RpgTypes.Command_ChangeEnemyHP;
  [RpgTypes.CHANGE_ENEMY_MP]: RpgTypes.Command_ChangeEnemyMP;
  [RpgTypes.TRANSFER_PLAYER]: RpgTypes.Command_TransferPlayer;
  //  [RpgTypes.CONTROL_VARIABLES]: RpgTypes.Command_ControlVariables;
};

export type Table_IndexOfDesignation = {
  [K in keyof CommandTypes]: RpgTypes.IndexOfCommandParameter<
    CommandTypes[K],
    0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
  >;
};
